# **UFOs**

## **Overview of the analysis**
Using JavaScript as the primary language in this module, we created a dynamic table to filter and organize UFO data. The data is stored originally as an array of objects and by applying JavaScript, HTML, Bootstrap, and CSS we established a web page where users can filter the data based on different criteria and get the relevant sighting information.
 
## **Results**
On the web page, there are multiple fields requiring user input. Then, after pressing the *Enter* key, the filtered data shows up on the table. 

![filtered_by_date.png](https://github.com/zkt2018/UFOs/blob/main/static/images/filtered_by_date.png)

![filtered_by_city.png](https://github.com/zkt2018/UFOs/blob/main/static/images/filtered_by_city.png)
 
The user may also filter data based on two criteria, as shown in the image below (e.g. table is filtered based on city and shape):

![filtered_by_city_shape.png](https://github.com/zkt2018/UFOs/blob/main/static/images/filtered_by_city_shape.png)

In order to clear the filtered data and get the total data table, the user only needs to click on the “UFO Sightings” button in the top bar displayed here.

![ufo_sightings.png](https://github.com/zkt2018/UFOs/blob/main/static/images/ufo_sightings.png)
 
## **Summary**
The web page created in this project is a simple dynamic table interacting to user inputs based on the current dataset. The criteria are somehow limited to specific formats. For instance it is impossible to search for the data based on the year only. Or the field of the country with the current dataset seems redundant as there is only one country in the dataset.
That will be beneficial to add the search fields which are more frequent, e.g. dividing the date field to year, month, and day. Another recommendation would be prompting a message when the data is not in the correct format.
