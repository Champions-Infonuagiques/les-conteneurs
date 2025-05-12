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
| docker | L'exécutable. |
| builder | Instruction de compiler un fichier. |
| --pull | Aller chercher les dernières versions dans le registre. |
| -rm | Supprimer le conteneur après compilation. |
| -f "dockerfile" | Fichier d'instruction. |
| -t "docker-helloworld:latest" | Étiquette - Nom de l'image et sa version. Peuvent y en avoir plusieurs. |
| --no-cache | Ne pas récupérer les éléments de compilation précédents. |
Référence: [docker buildx build \| Docker docs](https://docs.docker.com/reference/cli/docker/buildx/build/)

### Les images Docker
Les images Docker sont le résultat de la compilation des fichiers Docker. Ils sont constitués des couches définies par le fichier Docker. Les images Docker peuvent être stockées dans un registre d'image privé ou public.

Dans cette exemple: [./src/dockerfile](./src/dockerfile), `FROM` indique que l'image source à utiliser. Les couches de cette image s'additionnent aux couches qui sont déclarées dans le fichier d'exemple. `COPY` créé donc une couche additionnelle:

![](./doc/images/docker%20-%20image.png)

Chaque couche génère un "checksum" et peut être réutilisée par les autres images.

### Les registres d'images
#### Publique
Des images déjà compilées sont disponibles publiquement. Vous pouvez aussi y ajouter les vôtres.
- [Docker Hub](docker.io)
- [Quay.io](quay.io)
- [GitLab Container Registry](registry.gitlab.com)
- [GitHub Container Registry (GHCR)](ghcr.io)
- [Google Container Registry (GCR)](gcr.io)
- [Amazon Elastic Container Registry (ECR Public)](public.ecr.aws)

#### Privé
Il est possible d'héberger les images privées
- [Docker Registry (officiel) – Installation](https://docs.docker.com/registry/)
- [JFrog Artifactory – SaaS & Installation](https://jfrog.com/artifactory/)
- [Harbor – Installation](https://goharbor.io/)
- [GitLab Container Registry – SaaS & Installation](https://docs.gitlab.com/ee/user/packages/container_registry/)
- [Nexus Repository OSS – Installation](https://www.sonatype.com/products/repository-oss)

### L'orchestration
L'orchestration permet de déployer plusieurs conteneurs à la fois et de configurer leur interaction.

#### Swarm
Swarm est un mode gestion de l'orchestration. Il permet de gérer plusieurs nodes et de maintenir les conteneurs en opération.

#### Docker Compose vs Docker Stack
Docker Compose et Docker Stack sont très similaire, mais ne s'utilise pas dans les mêmes circonstances.

##### Docker Compose est conçus pour être utilisé dans un contexte de développement. Grâce à la command build, il peut compiler localement les conteneurs et les déployer en orchestration.

##### Docker Stack permet de déployer des conteneurs en orchestration, mais n'a pas de command "build". Il est surtout utilisé pour le déploiement en production dans un contexte Swarm.

> ***À noter:*** Les fichiers d'orchestration Stack ou Compose sont compatibles. Dans le cas de Docker Stack, l'instruction "build" est ignorée.

Example de fichier Docker Compose:

![](./doc/images/docker%20-%20orchestration.png)