#!/bin/bash

cp template.html test.html
sed -i '' '92r test.js' test.html
