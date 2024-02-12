`no-pascal-param-name`

A simple eslint rule to check for pascal param name and throws an error if it finds one.

# What can it catch?
### Examples
---
> Pascal param name
---
#### INVALID
```javascript
function getName(Name) {...}
```

#### VALID
```javascript
function getName(name) {...}
```

---
> Pascal object param
---
#### INVALID
```javascript
function getName({Name}) {...}
```

#### VALID
```javascript
function getName({name}) {...}
```
