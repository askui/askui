
from setuptools import setup, find_packages


setup(
    name='askui',
    version='0.0.2',
    description='Hallo world python package',
    url='https://gitlab.com/vqa4gui/mvp/askui-python-package',
    author='askui',
    author_email='dependencies',
    license='MIT',
    keywords='demo',
    zip_safe=False,
    packages=find_packages(),
    include_package_data=True,
    package_data = {
        '': [ '*.md' ,'*.png' ,'*.bin'],
    },
    install_requires=['']  # external packages as dependencies
)
