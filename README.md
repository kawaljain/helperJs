


# helperJs

## Getting Started

Helper.js contain the common function which we need in our project.

List of Function

-	Loging Message Function
-	Valid Email
-	Valid Emails
-	Password Check
-	Disable Class Check
-	Generate Random String
-	Generate Random Number
-	Generate Unique Number
-	Handling Api Call



### Prerequisites

First, we need to include the jquery file. 
After that we need to include the helper.js file.

### Step 1

Create the object of helper Class.

```
var helper = new Helper(‘development’)
```


In above example, we need to pass an environment, if we pass string other than development then it will be treated as production environment. The log message will not be visible in the console.

### Step 2

Now start using function using helper variable

```
helper.logMessage(‘Helo How are you?’)
```


## Description

### Loging Message Function

This function will display the all message in the console, if the environment is set to development.

```
helper.logMessage(‘Hi’)
```

### Valid Email

Return True, if value provided in a string is a valid email address.

```
helper.validEmail(‘admin@admin.com’) // Return True
```

```
helper.validEmail(‘adminom’)  // Return false
```

### Valid Emails

Return True, if any value provided in a array list is a valid email address.


```
helper.validEmails(['admin@admin.com','abc@gmail.com']) // Return True
```


### Password Check

Return True, if any value provided in a string is :-  
-	greater than eight character, 
-	containing at lease uppercase and lowercase string 
-	Contaning at least one integer value
-	At least one of the special Character(#?@!$%^&*-)
-	Space is not allowed in password


```
helper.validPassword(‘Hi’) // return false
```

```
helper.validPassword(‘Admin@123’) // return false
```

### Disable Class Check

Return True, if any instance provide in a function have disabled class

```
<input type=”test” id=”example”>

helper.disableCheck($(‘#example’) // return false

```

```
<input type=”test” id=”example2” class=”disabled“>

helper.disableCheck($(‘#example2’) // return true
```

### Generate Random String

This function provide a random string. 
-	First argument contain the length of a string 
-	Second argument contain the Characterset  os string. Its an optional argument.

```
helper.randomString(8) // SiIMYWzp
```

```
helper.randomString(8, 'ABCDEFGHIJKL') // HLIIIDII
```

### Generate Random Number

-	First argument contain Minimum value. Its an optional parameter 
-	Second argument contain maximum value. Its an optional parameter.

```
helper.randomNumber() // 0.19821252036195647
```

```
helper.randomNumber(5,20) // 16.832347710033076
```

### Generate Unique Number

This function provide a unique number.

```
helper.uniqueNumber() // 1545330337282
```


### Handling Api Call

This function is used to handle the ajax call. This function return the promise.
 In this function, we pass four parameter :-
-	Method name(string) example Get,Post,Put
-	Api Url(string)
-	Data(object)
-	Replace ajax Function(object) – This is optional parameter. In this function we pass beforeAjax() and afterAjax()
	    - beforeAjax() replace the default function of beforeSend function of ajax. This function calls before the ajax call.
	    - afterAjax() replace the default function of complete function of ajax call. This function call when the ajax request complete. 


```
helper.apiCall('POST',’abc.com/insert’,{‘page’:2}).then(function(data){
  	console.log(data)
  },function(eror){
  	console.log(eror);
  });

```

## Authors

* **Kawal Jain** - *Initial work* - [website]( http://kawaljain.com/)

