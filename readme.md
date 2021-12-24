# Url shortener - ms

## Simple url shortner build in NodeJs like bitly or shorturl

<div class="icons-container">
<div class="language-icon"><a href="https://nodejs.org/"><svg viewBox="0 0 128 128">
<path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209a.261.261 0 00.246 0l7.937-4.581a.248.248 0 00.122-.215v-9.16a.256.256 0 00-.123-.219l-7.934-4.577a.254.254 0 00-.245 0l-7.933 4.578a.259.259 0 00-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198a1.676 1.676 0 01-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587a1.743 1.743 0 011.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16a1.68 1.68 0 01-.833 1.448l-7.937 4.582a1.651 1.651 0 01-.834.223m2.453-6.311c-3.475 0-4.202-1.595-4.202-2.932a.23.23 0 01.23-.229h1.026a.23.23 0 01.228.194c.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777a.235.235 0 01-.06.176.236.236 0 01-.168.073h-1.031a.228.228 0 01-.223-.179c-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"></path><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856a1.017 1.017 0 00-1.019-.002l-8.416 4.859a1.018 1.018 0 00-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812a.508.508 0 00.006-.885l-8.468-4.86a.507.507 0 01-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52a.505.505 0 01.507 0l2.637 1.52a.507.507 0 01.255.439v2.396a.507.507 0 00.764.44l5.039-2.932"></path><path fill="#83CD29" d="M88.984 67.974a.2.2 0 01.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932a.194.194 0 01-.195 0l-1.614-.932a.194.194 0 01-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"></path><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666a.251.251 0 01-.254 0l-2.89-1.666a.255.255 0 01-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668a.248.248 0 01.255 0l2.891 1.668a.258.258 0 01.126.221v3.338zm.781-24.716a.511.511 0 00-.756.444v12.915a.359.359 0 01-.177.308.359.359 0 01-.356 0l-2.108-1.215a1.017 1.017 0 00-1.015 0l-8.418 4.858a1.018 1.018 0 00-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861a1.02 1.02 0 00.508-.881V50.821c0-.368-.2-.708-.521-.888l-5.011-2.795"></path><path fill="#83CD29" d="M38.238 59.407a1.014 1.014 0 011.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861a1.02 1.02 0 01-1.017 0l-8.415-4.861a1.02 1.02 0 01-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"></path><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843a.99.99 0 00-.464-.133h-.087a.993.993 0 00-.464.133l-8.416 4.843a1.02 1.02 0 00-.509.883l.018 13.04c0 .182.095.351.254.439a.487.487 0 00.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226a.994.994 0 01.508-.137c.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864a.508.508 0 00.76-.439l.019-13.04"></path>
</svg></a></div>
<div class="language-icon"><a href="https://www.npmjs.com/"><svg viewBox="0 0 128 128">
<path fill="#cb3837" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"></path>
</svg></a></div>
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


