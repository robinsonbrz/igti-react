# jQuery


## jQuery is a lightweight JavaScript library

"write less, do more"

It allows:

- HTML/DOM manipulation
- CSS manipulation
- HTML event methods
- Effects and animations
- AJAX
- Utilities


Add jQuery to a webpage

- Download the jQuery library from jQuery.com
    Downloaded and refered code:

    ```html
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    </head>
    ```

- Include jQuery from a CDN, like Google

    ```html
    <head>
        <script src="jquery-3.7.1.min.js"></script>
    </head>
    ```

## jQuery Syntax


- Select HTML elements and performing some action

    ```html
    $(selector).action()
    ```

A **$** sign to define/access jQuery

A **(selector)** to "query (or find)" HTML elements

A jQuery **action()** to be performed on the element(s)

- Document Ready event


    ```html
    $(document).ready(function(){

    // jQuery methods go here...

    }); 
    ```
This is to prevent any jQuery code from running before the document is finished loading (is ready).
It avoids accessing elements before it is already loaded

## jQuery Selectors

Select and manipulate HTML elements

- selecting all <p> elements on a page 

    ```html
    $("p") 
    ```

- hiding all <p> elements, on click
    ```html
    $(document).ready(function(){
        $("button").click(function(){
            $("p").hide();
        });
    });
    ```
    ___

- selecting by #id element, 

    id is meant to select a unique element `in a page 

    ```html
    $("#unico") 
    ```

- hiding id='unico' element, on button click
    ```html
    $(document).ready(function(){
        $("button").click(function(){
            $("#unico").hide();
        });
    });
    ```
    ___

- selecting .class element, 

    classes are group of one or more elements in a page 

    ```html
    $(".class01") 
    ```

- hiding class='class01' elements, on button click
    ```html
    $(document).ready(function(){
        $("button").click(function(){
            $(".class01").hide();
        });
    });
    ```
    ___



Here is the table you requested:

| Syntax | Description | 
| --- | --- |
| `*` | Selects all elements  `*` |
| `$(this)` | Selects the current HTML element |
| `$("p.intro")` | Selects all `<p>` elements with class="intro" |
| `$("p:first")` | Selects the first `<p>` element |
| `$("ul li:first")` | Selects the first `<li>` element of the first |
| `$("ul li:first-child")` | Selects the first `<li>` element of every `<ul>` `|
| `$("[href]")` | Selects all elements with an href attribute `$("[href]")` |
| `$("a[target='_blank']")` | Selects all `<a>` elements with a target attribute value equal to "_blank" |
| `$("a[target!='_blank']")` | Selects all `<a>` elements with a target attribute value NOT equal to "_blank" |
| `$(":button")` | Selects all `<button>` elements and `<input>` elements of type="button" |
| `$(":even")` | Selects all even elements (including rows, columns, etc.) |
| `$(":odd")` | Selects all odd elements (including rows, columns, etc.) |


Refering external js jQuery file

```html
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="my_jquery_functions.js"></script>
</head> 
```
