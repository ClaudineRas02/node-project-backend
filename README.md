# Backend - Gestion Enseignants 👨‍🏫

API Node.js + Express pour gérer les enseignants (CRUD + calculs) et renvoie les stats pour le graphe. ✨

## Prérequis ✅
- Node.js (v24)
- PostgreSQL (v18.3)

## Installation des dépendances 📦
```bash
cd backend
npm install
```

## Configuration (.env) 🔧
Crée un fichier `.env` **à la racine de `backend/`**  suivant l' exemple `.env.example`

## Initialiser la base de données 🗄️
Voici le même flux que nous utilisons pour créer la DB et importer le schéma :
```bash
psql -U postgres
CREATE USER user WITH PASSWORD 'password';
CREATE DATABASE dbname OWNER user;
\q

# Importer le schéma/données
psql -U user -d dbname -f path/to/db.sql
```

### Vérifier la DB 🔎
```sql
SELECT * FROM "Enseignant";
```

## Démarrer le serveur 🚀
```bash
npm run start
# ou en mode dev
npm run dev
```


N' hésitez pas à DM si problème ou parlez en à un LLM...😉
