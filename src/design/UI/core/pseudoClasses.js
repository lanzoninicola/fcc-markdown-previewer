/**
 * 
 *      Prototype legend:
 *      - '@':  number
 *      - '#':  selector
 * 
 */

import {warn} from '../utils/errors'
import {__DEV__} from '../utils/environments'

export const pseudoClasses = {
    active: {
       prototype: '#:active',
       description: 'selects the active link'
    },
    checked:{
        prototype: '#:checked',
        description: 'selects every checked <input> element'
     },	           
    disabled:	{
        prototype: '#:disabled',
        description: 'selects every disabled <input> element'
     },
    empty:{
        prototype: '#:empty',
        description: 'selects every <p> element that has no children'
     },	            
    enabled:{
        prototype: '#:enabled',
        description: 'selects every enabled <input> element'
     },
    firstChild:	{
        prototype: '#:first-child',
        description: 'selects every <p> elements that is the first child of its parent'
     },
    firstOfType:{
        prototype: '#:first-of-type',
        description: 'selects every <p> element that is the first <p> element of its parent'
     },
    focus:{
        prototype: '#:focus',
        description: 'selects the <input> element that has focus'
     },
    hover:{
        prototype: '#:hover',
        description: 'selects links on mouse over'
     },
    inRange:{
        prototype: '#:in-range',
        description: 'selects <input> elements with a description within a specified range'
     },
    invalid: {
        prototype: '#:invalid',
        description: 'selects all <input> elements with an invalid description'
     },
    lang:	 {
        prototype: '#:lang(#)',
        description: 'selects every <p> element with a lang attribute description starting with "it"'
     },
    lastChild:{
        prototype: '#:last-child',
        description: 'selects every <p> elements that is the last child of its parent'
     },
    lastOfType:{
        prototype: '#:last-of-type',
        description: 'selects every <p> element that is the last <p> element of its parent'
     },
    link:	{
        prototype: '#:link',
        description: 'selects all unvisited links'
     },
    not:	{
        prototype: ':not(#)',
        description: 'selects every element that is not a <p> element'
     },
    nthChild:	{
        prototype: '#:nth-child(@)',
        description: 'selects every <p> element that is the second child of its parent'
     },
    nthLastChild:	{
        prototype: '#:nth-last-child(@)' ,
        description: 'selects every <p> element that is the second child of its parent: counting from the last child'
     },
    nthLastOfType:{
        prototype: '#:nth-last-of-type(@)',
        description: 'selects every <p> element that is the second <p> element of its parent: counting from the last child'
     },
    nthOfType:	{
        prototype: '#:nth-of-type(@)',
        description: 'selects every <p> element that is the second <p> element of its parent'
     },
    onlyOfType:	{
        prototype: '#:only-of-type',
        description: 'selects every <p> element that is the only <p> element of its parent'
     },
    onlyChild:{
        prototype: '#:only-child',
        description: 'selects every <p> element that is the only child of its parent'
     },
    optional:	{
        prototype: '#:optional' ,
        description: 'selects <input> elements with no "required" attribute'
     },
    outOfRange:{
        prototype: '#:out-of-range',
        description: 'selects <input> elements with a description outside a specified range'
     },
    readOnly:{
        prototype: '#:read-only',
        description: 'selects <input> elements with a "readonly" attribute specified'
     },
    readWrite:{
        prototype: '#:read-write',
        description: 'selects <input> elements with no "readonly" attribute'
     },
    required:{
        prototype: '#:required',
        description: 'selects <input> elements with a "required" attribute specified'
     },
    root:	{
        prototype: ':root',
        description: 'selects the document\'s root element'
     },	            
    target:{
        prototype: '#:target',
        description: 'selects the current active #news element (clicked on a URL containing that anchor name)'
     },
    valid:{
        prototype: '#:valid',
        description: 'selects all <input> elements with a valid description'
     },
    visited:{
        prototype: '#:visited',
        description: 'selects all visited links'
     },	            
}

function pseudoclassName(value) {
    return value.substring(1, 999);
}

export function isPseudoclass(value = '') {
    if (value === '') {
        return false
    }

    const name = pseudoclassName(value);
    
    if (pseudoClasses?.[name] === undefined) {
        return false
    } 

    return true
}

export function getPseudoclass(value = '') {
    
    if (isPseudoclass(value)) {
        const name = pseudoclassName(value);
        return pseudoClasses[name]
    }

    if(__DEV__) {
        return warn('Stylish: pseudo-classes selected doesn\'t exist')
    }
    
    return {}
}

