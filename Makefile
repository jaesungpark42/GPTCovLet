#build

develop:  ## install dependencies and build library
	python -m pip install -e .[develop]

build:  ## build the python library
	python setup.py build build_ext --inplace

install:  ## install library
	python -m pip install .



#lints

lint:  ## run static analysis with flake8
	python -m black --check GPTCovLet setup.py
lints: lint

format:  ## run autoformatting with black
	python -m black GPTCovLet/ setup.py
fix: format

check:  ## check assets for packaging
	check-manifest -v
checks: check


#testing

test: ## clean and run unit tests #pytest main.py --cov
	python -m pytest -v GPTCovLet/tests
tests: test

coverage:  ## clean and run unit tests with coverage
	python -m pytest -v GPT_Cov_Let/tests --cov=GPT_Cov_Let --cov-branch --cov-fail-under=75 --cov-report term-missing

