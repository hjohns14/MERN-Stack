mkdir server && cd server && mkdir config controllers models routes && npm init -y
npm install express mongoose cors && echo "Server folder created!" &&
cd .. && npx create-react-app client && cd client &&
npm install tailwindcss postcss autoprefixer axios &&
cd .. && code .

