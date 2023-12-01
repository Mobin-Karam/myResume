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
4. - and ```npm run dev```

5. - For styling your application or website you use one of this , Tailwindcss or CSS Modules if use tailwindcss the first of installation in terminal command the terminal asked you are you want to install tailwindcss with the project or no , and second if you want use CSS Modules you add new file in /app/ui/[YOUR_FILE_NAME.module.css] and write your css code in there and import file in page.tsx for tailwindcss you should import file in layout.tsx 
 for Tailwindcss ``` import '@/app/ui/global.css' ``` 
 for CSS Module ``` import styles from '@/app/ui/[YOUR_FILE_NAME].module.css' ```

 for Tailwindcss ``` <div className="w-full h-0 text-white"></div> ```
 for CSS Module in tsx use in classes like this ``` <div className={styles.shape}></div> ```