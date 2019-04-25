# Buto-Plugin-MathPrime_number
Check if prime number with Javascript.
## Settings
Include js file in head.
```
type: widget
data:
  plugin: 'math/prime_number'
  method: include
```
## Testing
Javascript
```
for(var i=1;i<200;i++){
  if(PluginMathPrime_number.isPrimeNumber(i)){
    document.write((i)+'<br>');
  }
}
```


