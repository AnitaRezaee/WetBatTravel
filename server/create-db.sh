#!/bin/bash

rootpasswd="wetbat2021" 
database="wetbat"

RESULT=`mysqlshow --user=root --password=$rootpasswd $database | grep -v Wildcard | grep -o $database`

if [ "$RESULT" == "$database" ]; then
    echo "Database exists"
 else
    mysql -u root -p${rootpasswd} -e "CREATE DATABASE $database /*\!40100 DEFAULT CHARACTER SET utf8 */;"
 fi

 mysql -uroot -p${rootpasswd} <<MYSQL_SCRIPT
   USE wetbat; 
   CREATE TABLE IF NOT EXISTS quotes (
      id varchar(200) NOT NULL,
      name varchar(200) default '',
      email varchar(500) default '',
      departure varchar(500) default '',
      destination varchar(500) default '',
      transportation varchar(100) default '',
      people varchar(10) default '0',
      price varchar(50) default '$ 0.00',
      departureDate varchar(200) default '',
      returnDate varchar(200) default '', 
      PRIMARY KEY (id)
   );
MYSQL_SCRIPT

echo "table is created"