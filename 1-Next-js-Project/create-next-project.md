# How create nextjs Project :

1. - Write this in Terminal :

```
npx create-next-app@latest [YOUR_FOLDER_LOCATION] or ./ [THAT_FOLDER]
```

2. - change direction in terminal to your file with :

```
cd [YOUR_FOLDER_NAME]
```

3. - for run the server should first install node packages with this command in terminal :

```
npm install / npm i
```

4. - and `npm run dev`

5. - ### CSS Styling in Next.JS:

- How to add a global CSS file to your application.

- Two different ways of styling: Tailwind and CSS modules.

- How to conditionally add class names with the clsx utility package.

For styling your application or website you use one of this , Tailwindcss or CSS Modules if use tailwindcss the first of installation in terminal command the terminal asked you are you want to install tailwindcss with the project or no , and second if you want use CSS Modules you add new file in /app/ui/[YOUR_FILE_NAME.module.css] and write your css code in there and import file in page.tsx for tailwindcss you should import file in layout.tsx
for Tailwindcss `import '@/app/ui/global.css'`
for CSS Module `import styles from '@/app/ui/[YOUR_FILE_NAME].module.css'`

for Tailwindcss `<div className="w-full h-0 text-white"></div>`
for CSS Module in tsx use in classes like this `<div className={styles.shape}></div>`

#### Questions About CSS Modules :

What is one benefit of using CSS modules?

- Provide a way to make CSS classes locally scoped to components by default, reducing the risk of styling conflicts.
- CSS Modules create unique class names for each component, so you don't have to worry about style collisions.

Other styling solutions
In addition to the approaches we've discussed, you can also style your Next.js application with:

Sass which allows you to import .css and .scss files.
CSS-in-JS libraries such as styled-jsx, styled-components, and emotion.

### Optimmizing Fonts and Images :

How does Nextjs optimize fonts?

- It hosts font files with other static assets so that there are no additional network requests.

for using the fonts in Nextjs Projects create file in @/app/ui named Fonts.ts

##### Hint : Images without dimensions and web fonts are common causes of layout shift due to the browser having to download additional resources.
