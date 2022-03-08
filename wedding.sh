#!/bin/bash
IFS=''
while read -r line;do
    echo $line
    sleep .1
done < test.txt

sleep 10

echo ""