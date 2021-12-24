# Url shortener - ms

## Simple url shortner build in NodeJs like bitly or shorturl

<div class="icons-container" style="display: flex;">
    <div class="language-icon"><a href="https://nodejs.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" style="width: 100%; max-width: 80px;" /></a></div>
    <div class="language-icon"><a href="https://www.npmjs.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" style="width: 100%; max-width: 80px;" /></a></div>
</div>

**Dependecies:**
- [Node 16.x ](https://nodejs.org/)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [shortid](https://www.npmjs.com/package/shortid)
- [valid-url](https://www.npmjs.com/package/valid-url)

# How to use

## **First step - clone the project**
Clone the github repository into your directory, run the script below on your terminal
<div class="highlight">
  <code>git clone git@github.com:Akihiko64/url-shortener.git</code>
  <!-- <button>Copy</button> -->
</div>

## **Install the project**
Install the project, run script below in your terminal
<div class="highlight">
  <code>npm install</code>
  <!-- <button>Copy</button> -->
</div>


## **Add environment variables**

In your root directory add .env file and add your varibles

Run this scripts in your terminal

<div class="highlight">
  <code>touch .env</code>
  <!-- <button>Copy</button> -->
</div>

*This script add .env archive in your directory*

<div class="highlight">
  <code>
  echo "DB_URI = ${your uri database>}" >> .env<br>
  echo "PORT = ${your port server}" >> .env<br>
  echo "BASE = ${url base; default http://localhost:${your port server}}" >> .env
  </code>
  <!-- <button>Copy</button> -->
</div>

*This script add your variables in .env*
*Replace ${variables} for your values*
*Note: in this project used mongodb and mongodb atlas for database, but your can use mongo in your local machine.*


## **Run project**

Run project with NPM script

<div class="highlight">
  <code>npm run dev</code>
  <!-- <button>Copy</button> -->
</div>

<head>
<style>
    .icons-container{
        display: flex;
        justify-content: flex-start;
    }

    .language-icon{
        width: 100%;
        max-width: 80px;
    }

    .language-icon:not(:first-child){
        margin-left: 20px;
    }
        
    div.highlight {
    width: 100%;
    max-width: 800px;
    position: relative;
    border-radius: 0.2rem;
    padding: 10px;
    margin: 1.5rem 0;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    }

    div.highlight button {
    color: #adb5bd;
    box-sizing: border-box;
    transition: 0.2s ease-out;
    cursor: pointer;
    user-select: none;
    background: rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(0, 0, 0, 0);
    padding: 5px 10px;
    font-size: 0.8em;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 0.15rem;
    }

    .highlight, pre.highlight {
    background: #282c34;
    color: #abb2bf;
    }

</style>



<script>
    const copyToClipboard = str => {
    const el = document.createElement('textarea'); // Create a <textarea> element
    el.value = str; // Set its value to the string that you want copied
    el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px'; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    const selected =
        document.getSelection().rangeCount > 0 // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0) // Store selection if found
        : false; // Mark as false to know no selection existed before
    el.select(); // Select the <textarea> content
    document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el); // Remove the <textarea> element
    if (selected) {
        // If a selection existed before copying
        document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
        document.getSelection().addRange(selected); // Restore the original selection
    }
    };

    function handleCopyClick(evt) {
    // get the children of the parent element
    const { children } = evt.target.parentElement;
    // grab the first element (we append the copy button on afterwards, so the first will be the code element)
    // destructure the innerText from the code block
    const { innerText } = Array.from(children)[0];

    // copy all of the code to the clipboard
    copyToClipboard(innerText);
    // alert to show it worked, but you can put any kind of tooltip/popup
    }

    // get the list of all highlight code blocks
    const highlights = document.querySelectorAll('div.highlight');
    // add the copy button to each code block
    highlights.forEach(div => {
    // create the copy button
    const copy = document.createElement('button');
    copy.innerHTML = 'Copy';
    // add the event listener to each click
    copy.addEventListener('click', handleCopyClick);
    // append the copy button to each code block
    div.append(copy);
    });
</script>


</head>