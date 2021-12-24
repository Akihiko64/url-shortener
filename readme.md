# Url shortener - ms

## Simple url shortner build in NodeJs like bitly or shorturl

<div class="icons-container" style="display: flex;">
    <div class="language-icon"><a href="https://nodejs.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="80px"/></a></div>
    <div class="language-icon"><a href="https://www.npmjs.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="80px" /></a></div>
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


```
git clone git@github.com:Akihiko64/url-shortener.git
```

## **Install the project**
Install the project, run script below in your terminal

```
npm install
```


## **Add environment variables**

In your root directory add .env file and add your varibles

Run this scripts in your terminal

```
touch .env
```

*This script add .env archive in your directory*

```
  echo "DB_URI = ${your uri database>}" >> .env
  echo "PORT = ${your port server}" >> .env
  echo "BASE = ${url base; default http://localhost:${your port server}}" >> .env
```

*This script add your variables in .env*
*Replace ${variables} for your values*
*Note: in this project used mongodb and mongodb atlas for database, but your can use mongo in your local machine.*


## **Run project**

Run project with NPM script

```
npm run dev
```
