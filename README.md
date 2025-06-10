# TicTacToe Multiplayer

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

Un jeu de Morpion (TicTacToe) multijoueur en temps réel, propulsé par WebSockets, construit avec Next.js, React, TypeScript, Tailwind CSS, Prisma et MySQL.

---

## 📖 Description

**TicTacToe Multiplayer** est une application web qui permet à deux joueurs de s’affronter en temps réel :

- **Comptes & authentification** : création de comptes utilisateurs, stockés dans une base MySQL via Prisma.
- **Recherche de partie** : un seul bouton **Search a Match** pour vous connecter à une partie avec un adversaire disponible.
- **Match en direct** : dès qu’un adversaire est trouvé grâce au Matchmaking, vous êtes redirigé vers le plateau de jeu.
- **Fin de partie** : à la fin de la partie (victoire, défaite ou match nul), vous êtes automatiquement déconnecté du match et pouvez relancer une nouvelle recherche.

L’application utilise des WebSockets pour synchroniser instantanément les coups des deux joueurs et offre une expérience fluide et réactive.

---

## 🚀 Démo

> [Cliquez ici](https://ttt.sofianelaloui.me)

---

## 🛠️ Stack technique

- **Framework** : Next.js (React + TypeScript)  
- **UI** : React + Tailwind CSS  
- **Temps réel** : Websockets (Socket.IO)
- **Base de données** : MySQL
- **ORM** : Prisma  

---

## 🔧 Prérequis

Avant de commencer, assurez-vous d’avoir installé :

- **Node.js** (>= 16.x) et **npm** ou **yarn**  
- **MySQL** (voir [Xampp](https://www.apachefriends.org/fr/index.html) si vous souhaitez le host en local). 
- **Git** pour cloner le dépôt

---

## ⚙️ Installation & Démarrage

**Cloner le dépôt**  
   ```bash
   git clone https://github.com/ElSofian/tictactoe.git
   cd tictactoe
   npm i --legacy-peer-deps
   npx prisma db pull
   npx prisma generate
   npm run dev
```
