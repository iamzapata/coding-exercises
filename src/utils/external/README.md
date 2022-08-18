    # Why does this directory exist?

    The `src/utils/external` directory contains third party dependencies wrapped in
    an internal api. This allows us to use third party libraries, while keeping
    the door open for replacing or reeimplementing them in the future, without having to change the whole codebase.

    A good list of reasons taken from [Stack Exchange](https://softwareengineering.stackexchange.com/questions/107338/using-third-party-libraries-always-use-a-wrapper#answer-298176):

    ## Your code base becomes more flexible to changes

    If you ever need to replace the library with another one you only need to change your implementation in your wrapper - in one place. You can change the implementation of the wrapper and don't have to change a thing about anything else, in other words you have a loosely coupled system. Otherwise you would have to go through your whole codebase and make modifications everywhere - which is obviously not what you want.

    ## You can define the API of the wrapper independently of the API of the library

    Different libraries can have vastly different APIs and at the same time none of them may be exactly what you need. What if some library needs a token to be passed along with every call? You can pass the token around in your app wherever you need to use the library or you can safe it somewhere more centrally, but in any case you need the token. Your wrapper class makes this whole thing simple again - because you can just keep the token inside your wrapper class, never exposing it to any component inside your app and completely abstract away the need for it. A huge advantage if you ever used a library which does not emphasise good API design.

    ## Unit testing is way simpler

    Unit tests should only test one thing. If you want to unit test a class you have to mock its dependencies. This becomes even more important if that class makes network calls or accesses some other resource outside of your software. By wrapping the third party library it is easy to mock those calls and return test data or whatever that unit test requires. If you don't have such a layer of abstraction it becomes much more difficult to do this - and most of the time this results in a lot of ugly code.

    ## You create a loosely coupled system

    Changes to your wrapper have no effect on other parts of your software - at least as long as you don't change the behaviour of your wrapper. By introducing a layer of abstraction like this wrapper you can simplify calls to the library and and almost completely remove the dependency of your app on that library. Your software will just use the wrapper and it won't make a difference how the wrapper is implemented or how it does what it does.
