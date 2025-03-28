Na początku naley ustawić folder roboczy w którym znajdują się pliki
By utworzyć pierwszy obraz należy w wierszu komend użyć polecenia:
docker build -f Dockerfile_scratch -t docker1 .
By uruchomić kontener należy użyć polecenia:
docker run --rm -d -p 80:80 --name docker1 docker1

By utworzyć drugi obraz należy w wierszu komend użyć polecenia:
docker build -f Dockerfile_scratch2 -t docker2 .
By uruchomić kontener należy użyć polecenia:
docker run --rm -d -p 80:80 --name docker2 docker2
by sprawdzić działanie kontenera:
curl http://localhost
by sprawdzić logi kontenera:
docker logs -f docker2
