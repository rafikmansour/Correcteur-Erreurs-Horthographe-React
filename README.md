# Composant recat correction automatique des erreurs d'orthographe

La correction automatique des erreurs d'orthographe est un processus complexe qui nécessite l'utilisation d'un outil linguistique avancé tel que Hunspell ou un service externe comme Grammarly. Dans cet exemple, nous allons utiliser le service externe de "GrammarBot" pour corriger les erreurs d'orthographe dans un paragraphe.

PS: j'avais utilisé ce composant pour un site en anglais, donc changer juste le EN vers fr pour le français ou la langue de votre choix.

Tout d'abord, installez Axios en utilisant la commande suivante (on doit envoyer des requete http vers le service).

npm install axios


Assurez-vous de remplacer "YOUR_GRAMMARBOT_API_KEY" par votre clé d'API réelle pour pouvoir utiliser le service GrammarBot.

Ce composant React comprend un formulaire avec un champ de texte où vous pouvez saisir un paragraphe contenant des erreurs d'orthographe. Lorsque vous cliquez sur le bouton "Corriger", le composant enverra le texte au service GrammarBot pour correction. Le texte corrigé sera affiché sous le formulaire.

N'oubliez pas que GrammarBot offre une version gratuite et une version payante. Assurez-vous de consulter les conditions d'utilisation et les limitations de leur service gratuit.
