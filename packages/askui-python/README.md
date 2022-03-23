# askui-python-package

## Getting started
To publish the package, you need to run this command: 
- build

```bash
  python setup.py sdist bdist_wheel
```

- publish 
 ```bash
 TWINE_PASSWORD=<personal_access_token or deploy_token> TWINE_USERNAME=<username or deploy_token_username>  python3 -m twine upload --repository-url https://gitlab.com/api/v4/projects/32791001/packages/pypi dist/*
```

To download the package, you need to run this command:n the command : 
  ```bash
pip install askui --extra-index-url https://__token__:<your_personal_token>@gitlab.com/api/v4/projects/32791001/packages/pypi/simple
```
## Usage

you can import the package and use the SayHello function 

  ```bash
import askui
askui.SayHello()
```

