<?php
class PluginMathPrime_number{
  public static function widget_include(){
    wfPlugin::enable('include/js');
    wfDocument::renderElement(array(wfDocument::createWidget('include/js', 'include', array('src' => '/plugin/math/prime_number/PluginMathPrime_number.js'))));
  }
}
