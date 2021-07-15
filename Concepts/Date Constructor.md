**Date object**s: contain a number that represents milliseconds since 1 January 1970 UTC. 

## Ranges

0 (Sunday) - 6 (Saturday)

0 (January) - 11 (December)

The range of the day argument, however, starts at `1` (first day of the month) instead of `0` (last day of the previous month).

## Solution

```js
function fridayThe13ths(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  return thirteenths.reduce((count, day) => {
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0);
}

```

The solution leverages the `Date` constructor and a `for` loop to build an array of `Date` objects that fall on the 13th of every month. It then uses `Array.prototype.reduce` to get the count of the 13ths that fall on a Friday.

## Functions

| Function           | arguments / syntax                                  | what it does                                                 | What it returns                                              |
| ------------------ | --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Date.getDay()      | none                                                |                                                              | returns an integer between 0 and 6 representing weekly dates |
| Date() constructor | const date1 = new Date('December 17, 1995 3:24:00') | Creates a javascript instance that represents a single moment in time in a platform-independent format. |                                                              |
|                    |                                                     |                                                              |                                                              |

**Date object**s: contain a number that represents miliseconds since 1 Jaunary 1970 UTC. 

**Date Constructor **

Syntax

```js
new Date()
new Date(value)
new Date(dateString)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

### [Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#parameters)

There are four basic forms for the `Date()` constructor:

1. #### No parameters

   When no parameters are provided, the newly-created `Date` object represents the current date and time as of the time of instantiation.

2. #### Time value or timestamp number

   - `value`

     An integer value representing the number of milliseconds since January 1, 1970, 00:00:00 UTC (the ECMAScript epoch, equivalent to the UNIX epoch), with leap seconds ignored. Keep in mind that most [UNIX Timestamp](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16) functions are only accurate to the nearest second.

3. #### Timestamp string

   - `dateString`

     A string value representing a date, specified in a format recognized by the [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) method. (These formats are [IETF-compliant RFC 2822 timestamps](https://datatracker.ietf.org/doc/html/rfc2822#page-14), and also strings in a [version of ISO8601](https://www.ecma-international.org/ecma-262/11.0/#sec-date.parse).)**Note:** Parsing of date strings with the `Date` constructor (and `Date.parse()`, which works the same way) is *strongly discouraged* due to browser differences and inconsistencies.Support for [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822) format strings is by convention only.Support for ISO 8601 formats differs in that date-only strings (e.g. `"1970-01-01"`) are treated as UTC, not local.

4. #### Individual date and time component values

   Given at least a year and month, this form of `Date()` returns a `Date` object whose component values (year, month, day, hour, minute, second, and millisecond) all come from the following parameters. Any missing fields are given the lowest possible value (`1` for `day` and `0` for every other component). The parameter values are all evaluated against the local time zone, rather than UTC.

   - `year`

     Integer value representing the year.Values from `0` to `99` map to the years `1900` to `1999`. All other values are the actual year. See the [example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#two_digit_years_map_to_1900_–_1999).

   - `monthIndex`

     Integer value representing the month, beginning with `0` for January to `11` for December.

   - `day` Optional

     Integer value representing the day of the month. The default is `1`.

   - `hours` Optional

     Integer value representing the hour of the day. The default is `0` (midnight).

   - `minutes` Optional

     Integer value representing the minute segment of a time. The default is `0` minutes past the hour.

   - `seconds` Optional

     Integer value representing the second segment of a time. The default is `0` seconds past the minute.

   - `milliseconds` Optional

     Integer value representing the millisecond segment of a time. The default is `0` milliseconds past the second.

### [Return value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#return_value)

Calling `new Date()` (the `Date()`constructor) returns a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object. If called with an invalid date string, it returns a `Date` object whose [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString) method returns the literal string `Invalid Date`.

Calling the `Date()` function (without the `new` keyword) returns a string. If called with an invalid date string, the `Date()` function returns the literal string `Invalid Date`.
