clean::
	rm -rf node_modules dist

run::
	docker-compose up

deps::
	npm i

.PHONY = clean deps run
