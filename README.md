#GitHub, Travis CI and SauceLabs

```java
//TODO: Hook up Travis CI to a GitHub repository and have it work with SauceLabs. Might be cool to have it deploy to my droplet after passing.
```
1) I have my free GitHub domain: cheriejw.github.io.
2) I have a Travis CI account that is already hooked up to my GitHub account.
3) I added my repository cheriejw.github.io to Travis CI.

TravisCI is relatively easy to set up, after hooking it up to your github account and your repository, you just need to put a .travis.yml file in that repository.
[This link was very helpful in getting started making .travis.yml configuration file](http://blog.tgrrtt.com/exploring-the-travisci-configuration-file "Exploring the TravisCI Configuration File")

[TravisCI also has a nice section on getting hooked up to SauceLabs.](https://docs.travis-ci.com/user/sauce-connect/ "Using SauceLabs") The only thing I found concerning was exposing my access key, since this .travis.yml file will be pushed publicly to GitHub.
[I used this link to keep my SauceLabs access key safe.](https://docs.travis-ci.com/user/environment-variables/ "Environment Variables in TravisCI")