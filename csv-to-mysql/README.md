# How to Import a CSV into MySQL using CLI for Beginners

Disclaimer; There are many ways to import a CSV into a MySQL Database. [This article](https://blog.skyvia.com/how-to-import-csv-file-into-mysql-table-in-4-different-ways/) for example outlines 4 ways you can do this. For our purposes we want to focus on how we can accomplish this without using a GUI. These instructions can all be completed using just your terminal.

## Instructions

### 1. Start MySQL (if you haven't already).

For most people that command will probably be:

```
mysql.server restart
```

For my case though, since I installed with Mac Homebrew (rather than downloading an installer and running it), I had to run it with:

```
brew services restart mysql
```

### 2. (Optional) Make a user (if you haven't already).

In this tutorial we'll just use the root user for simplicity, but making your own is recommended for security reasons so that you can restrict your permissions and avoid making destructive changes. If you decide to make a user you can run this:

```
CREATE USER 'username'@'host' IDENTIFIED BY 'password';
```

Just make sure to adjust the username, host, and password accordingly.

### 3. Open the MySQL CLI Program.

```
mysql -u root -p
```

`mysql` is specifying that we want to open the MySQL shell (in other words, a MySQL program where we can enter MySQL commands within our terminal). `-u` is an argument meaning "user", so there you will enter `root` or the name of your user. `-p` is another argument meaning "password", just saying that it will prompt us for a password once we hit enter.

### 4. Create the `full_grades_db`.

We can start by running `SHOW DATABASES;` just to see what our database list looked like originally. In my case there's just the 4 default databases.

Next, call it what you want but create the database using this command:

```
CREATE DATABASE full_grades_db;
```

After running this command if you run `SHOW DATABASES;` again you'll notice that there's an extra database now, one called `full_grades_db`, the name of our database. So the database has been successfully created!

Run this command to specify that you want to use this new database.

```
USE full_grades_db;
```

This command is just saying that on all the commands you run after this, you want them to be run on the database you just specified.

### 5. Download the CSV file

You can download it from https://github.com/dailynexusdata/grades-data/blob/main/full_grades.csv.

### 6. Create the `full_grades` table.

Start by running `SHOW TABLES;` just to make sure that we don't have any tables already. You should see an empty set. Now we can create the table.

```
CREATE TABLE IF NOT EXISTS full_grades (
  quarter VARCHAR(100),
  course_level VARCHAR(100),
  course VARCHAR(100),
  instructor VARCHAR(100),
  grade VARCHAR(100),
  student_count INT
);
```

Okay, let's digest it. We're saying we want to create a new table with the name `full_grades` if one doesn't already exist. If one already exists with that name then this command won't do anything. Inside the parentheses, we're saying what our column names will be. Here we basically just matched the columns with the CSV file for simplicity. Notice how the names are lower*camel_case, with underscores (*) instead of spaces. This is the typical convention for SQL. Then we have `VARCHAR`. That's basically a string, saying that it can contain not just numbers, but also characteres, or a mix of both. The `(100)` is putting a max length on the varchar saying that we can't insert more than 100 characters into an entry of that column. We could have set this to a smaller amount if we wanted to save space and have a smaller database, but we wanted to make sure that it was big enough for even extreme cases. Lastly, the `INT`. If you're familiar with programming this is just an integer. In other words, this column only allows for whole numbers. This is a perfect use case for an integer since it's just a count of students, so there won't be decimals.

If you re-run the `SHOW TABLES;` command now, you'll notice that `full_grades` now appears in the output. That means it was successfully created!

### 7. <b><u>THE BIG STEP</u>: Import .csv file into our MySQL Table!</b>

First run `SELECT * FROM full_grades;`. This command will show what's in our table, and we're running it now just to verify that nothing is in it currently.

Bonus information: This is a SQL query. A SQL query is just a command that you can send to MySQL so you can interact with your database and its tables. This command specifically gets all the columns and rows of our `full_grades` table. Now, if you just want to select a few columns, rather than doing a `*`, you can replace that with a list of the columns you want to return, i.e. `SELECT grade, student_count FROM full_grades;`. If you want to return some specific rows instead of all of them, you can add an a `WHERE` clause, i.e. `SELECT * FROM full_grades WHERE student_count > 10;`, which will only return the rows that have a student_count that is bigger than 10.

Now for the <b>MOST IMPORTANT COMMAND</b> of this tutorial:

```
LOAD DATA INFILE '~/Downloads/full_grades.csv'
INTO TABLE full_grades
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
```

This command says that we want to load data from a file, then inside quotes we pass the path to our file (Notice here how I used a ~ tilde, that just means the home directory). Then we specify which table we want to load that data into, which for us we want to add it to the `full_grades` table. Now if you open up your `.csv` file in a text editor, you'll notice it's really not a spreadsheet under the hood. Instead, it's just a text file with commas between the cells/entries. What this means is we put `FIELDS TERMINATED BY ','` to let it know that this file uses commas to separate them (there are other characters that could be used instead). Then we see that these fields are enclosed by double quotes and the lines end in new line characters (`\n`). Lastly, `IGNORE 1 ROWS` says not to import the row that has the column names, because we don't want those to show up as normal entries within our table.

Warning: You may get an issue such as "The MySQL server is running with the --secure-file-priv option so it cannot execute this statement secure_file_priv". If that happens, see [this blog post](https://acp8.medium.com/solving-the-mysql-server-is-running-with-the-secure-file-priv-option-so-it-cannot-execute-this-d319de864285). Basically you need to add a `.my.cnf` file that allows you to load files from anywhere.

Lastly, you can verify that the CSV was successfully imported by running:

```
SELECT * FROM full_grades;
```

Same command as before, except this time it should return back a ton of data! You should now see that thousands of rows are in your table, and these rows should match what was is in your CSV file. You're all done!
