# Les conteneurs
## La technologie Docker
![](./doc/images/docker%20-%20technology.png)
### Les fichiers Docker
Les fichiers Docker servent à définir le conteneur de l'image Docker. Il sont simplement une liste d'instruction qui donne des directives au compilateur. Chaque instruction génère une couche.

Example: [./src/dockerfile](./src/dockerfile)
```docekrfile
FROM nginx

COPY html /usr/share/nginx/html
```

### Compiler les fichiers Docker
Pour compiler les fichiers Docker, Docker CLI est requis. Pour exécuter la compilation, voici la commande à lancer:
`docker build --pull -rm -f "dockerfile" -t "docker-helloworld:latest" --no-cache "."`

| commande | Description |
| -------- | ----------- |
| docker | L'éxécutable. |
| builder | Instruction de compiler un fichier. |
| --pull | Aller chercher les dernières version dans le régistre. |
| -rm | Supprimer le conteneur apres compilation. |
| -f "dockerfile" | Fichier d'instruction. |
| -t "docker-helloworld:latest" | Étiquette - Nom de l'image et sa version. Peut en avoir plusieurs. |
| --no-cache | Ne pas récupéré les élémenents de compilation précédent. |
Référence: [docker buildx build \| Docker docs](https://docs.docker.com/reference/cli/docker/buildx/build/)

### Les images Docker
Les images Docker sont le résultat de la compilation des fichiers Docker. Ils sont constitué des couches défini par le fichier Docker. Les images Docker peuvent être stocké dans un régistre d'image privé ou publique.

Dans cette example: [./src/dockerfile](./src/dockerfile), `FROM` indique l'image source à utiliser. Les couches de cette image s'additionne au couche qui sont déclarer dans le fichier d'example. `COPY` créé donc une couche additionnelle:

![](./doc/images/docker%20-%20image.png)

Chaque couche génère un "checksum" et peut être réutilisé par les autres images.

### Les régistres d'images
#### Publique
Des images déjà compilé sont disponible publiquement. Vous pouvez aussi y ajouter les votres.
- [Docker Hub](docker.io)
- [Quay.io](quay.io)
- [GitLab Container Registry](registry.gitlab.com)
- [GitHub Container Registry (GHCR)](ghcr.io)
- [Google Container Registry (GCR)](gcr.io)
- [Amazon Elastic Container Registry (ECR Public)](public.ecr.aws)

#### Privé
Il est possible d'héberger les images privés
- [Docker Registry (officiel) – Installation](https://docs.docker.com/registry/)
- [JFrog Artifactory – SaaS & Installation](https://jfrog.com/artifactory/)
- [Harbor – Installation](https://goharbor.io/)
- [GitLab Container Registry – SaaS & Installation](https://docs.gitlab.com/ee/user/packages/container_registry/)
- [Nexus Repository OSS – Installation](https://www.sonatype.com/products/repository-oss)

### L'orchestration
L'orchestration permet de déployer plusieurs conteneurs à la fois et de configurer leur interaction.

![](./doc/images/docker%20-%20orchestration.png)