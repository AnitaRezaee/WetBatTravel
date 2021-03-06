#!/bin/bash

rootpasswd="wetbat2021" 
database="wetbat"

RESULT=`mysqlshow --user=root --password=$rootpasswd $database | grep -v Wildcard | grep -o $database`

if [ "$RESULT" == "$database" ]; then
    echo "Database exists"
 else
    mysql -u root -p${rootpasswd} -e "CREATE DATABASE $database /*\!40100 DEFAULT CHARACTER SET utf8 */;"
 fi

 
