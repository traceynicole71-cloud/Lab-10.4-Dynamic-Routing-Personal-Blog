# Component Creation and Props
Dynamic Routing

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
Scenario
You are tasked with building a small but feature-rich blog application. This will require you to implement a core feature of modern web applications: dynamic routing. You’ll create a system where a list of blog posts links to individual, dynamically generated pages for each post.

Furthermore, you will implement a basic authentication system and create a “protected” admin area that is only accessible to logged-in users, a common requirement in real-world applications.

This lab will give you hands-on experience with React Router and handling URL parameters.


### The challenge

- Implement dynamic routes in React Router to generate pages from data.
- Create a main “index” page that links to multiple dynamic detail pages.
- Read and use route parameters (slugs or IDs) to fetch and display data for a specific page.
- Structure a basic client-side authentication system using React Context.
- Create a protected route that redirects unauthenticated users.
- Conditionally render UI elements based on the user’s authentication status.
- (Bonus) Implement simple animated page transitions.


### Links

- Assignment URL: https://ps-lms.vercel.app/curriculum/se/416/lab-4
- Github URL: https://github.com/traceynicole71-cloud/Lab-10.4-Dynamic-Routing-Personal-Blog


## My process
 My process was to develop code by following the activity tasks step-by-step. I then took it a step further to ask AI to help me make corrections that I could not identify at the end of coding. 


### Built with
- React
- CSS
- Typescript
- Tailwind


### What I learned

I learned how to use a plethora of React methods to produce a clean App--specifically slug, Framer Motion,  and react-router-dom, thinking of them as the brain-skelton-skin of the project gave me a better perspective of how they interact and (in turn) made it easier to adapt and adopt the methods. I also learned that I have to be careful when downloading tailwind and configuring in projects.  I asked co-pilot to configure tailwind for me, and it downloaded the wrong version and that created a whole problem with my color theme. 

### Continued development

Continued development for me is to still pay attention to importing and exporting that links each code file to the appropriate others. I also want to continue to develop in my usage of Tailwind.

### Useful resources

- [Fullstack Advanced Youtube] https://www.youtube.com/watch?v=AA8RP0z_CYY
- [Dave Gray Youtube Dynamic File-Based Routing in React Tutorial] https://www.youtube.com/watch?v=FUpvQQzBJmU
- [Kalman Web Design Create Dynamic Navigation in React with React Router DOM Youtube Tutorial] ?
- Jeffrey Leak, Computer Scientist and Senior Software Engineer V


### AI Collaboration

I the Github co-pilot to make sure my Typescript files were configured correctly, and to help me insert athe sun and moon emoji in the app. I also used it to help find error at the end of coding when  I couldn't find the error that was preventing the theme colors from populating. I used Google Gemini to provide the code to create the pink, green, and gray heme for the card; however, in this lab i asked co-pilot to configure Tailwind and it downloaded an old version and my colors didn't populate correctly.

## Acknowledgments

Thank you to Jeffrey Leak for helping me to make senses of React concepts and methods.

