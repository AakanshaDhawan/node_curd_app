<!DOCTYPE html>
<html>
<head>
<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
</head>
<body>


<table class="users">
  <tr>
    <th>Name</th>
    <th>Address</th>
    <th>Email</th>
	<th>Mobile Number</th>
	<th>Date of birth</th>
  </tr>
   <% for(var i=0; i<quotes.length; i++) {%>
  <tr class="user">
    <td><%= quotes[i].name1 %></td>
    <td><%= quotes[i].address %></td>
	<td><%= quotes[i].email %></td>
	<td><%= quotes[i].mobnumber %></td>
	<td><%= quotes[i].dob %></td>
   </tr>
   <% } %>
 </table>

</body>
</html>
