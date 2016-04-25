dev: build-dev
	docker run -v $$PWD:/usr/src/app -p 80:80 --rm -it webpack_starter_dev

build-dev:
	docker build -t webpack_starter_dev .