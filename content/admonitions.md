# Admonitions

::::::{important}
The examples are taken from the original documentation of the Sphinx book theme, available at their [website](https://sphinx-book-theme.readthedocs.io/en/stable/reference/kitchen-sink/admonitions.html).
::::::

The syntax to use admonitions is the following:
```text
::::::{class}
<content>
::::::
```
where `class` is the type of admonition used, and `<content>` is what will be inside the admonition. In this chapter we present classes of admonitions available, and their styling in the TU Delft theme.

## `topic`

::::::{topic} This is a topic
This is what admonitions are a special case of, according to the docutils documentation.
::::::
```text
::::::{topic} This is a topic
This is what admonitions are a special case of, according to the docutils documentation.
::::::
```

## `admonition`

::::::{admonition} The one with the custom titles
It's got a certain charm to it.
::::::
```text
::::::{admonition} The one with the custom titles
It's got a certain charm to it.
::::::
```

## `attention`

::::::{attention}
Climate change is real.
::::::
```text
::::::{attention}
Climate change is real.
::::::
```

## `caution`

::::::{caution}
Cliff ahead: Don't drive off it.
::::::
```text
::::::{caution}
Cliff ahead: Don't drive off it.
::::::
```

## `danger`

::::::{danger}
Mad scientist at work!
::::::
```text
::::::{danger}
Mad scientist at work!
::::::
```

## `error`

::::::{error}
Does not compute.
::::::
```text
::::::{error}
Does not compute.
::::::
```

## `hint`

::::::{hint}
Insulators insulate, until they are subject to ______ voltage.
::::::
```text
::::::{hint}
Insulators insulate, until they are subject to ______ voltage.
::::::
```

## `important`

::::::{important}
Tech is not neutral, nor is it apolitical.
::::::
```text
::::::{important}
Tech is not neutral, nor is it apolitical.
::::::
```

## `note`

::::::{note}
This is a note.
::::::
```text
::::::{note}
This is a note.
::::::
```

## `seealso`

::::::{seealso}
Other relevant information.
::::::
```text
::::::{seealso}
Other relevant information.
::::::
```

## `tip`

::::::{tip}
25% if the service is good.
::::::
```text
::::::{tip}
25% if the service is good.
::::::
```

## `warning`

::::::{warning}
Reader discretion is strongly advised.
::::::
```text
::::::{warning}
Reader discretion is strongly advised.
::::::
```

## `versionadded`

::::::{versionadded} v0.1.1
Here's a version added message.
::::::
```text
::::::{versionadded} v0.1.1
Here's a version added message.
::::::
```

## `versionchanged`

::::::{versionchanged} v0.1.1
Here's a version changed message.
::::::
```text
::::::{versionchanged} v0.1.1
Here's a version changed message.
::::::
```

## `deprecated`

::::::{deprecated} v0.1.1
Here's a deprecation message.
::::::
```text
::::::{deprecated} v0.1.1
Here's a deprecation message.
::::::
```