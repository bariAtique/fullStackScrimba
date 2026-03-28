/**
 * date constructor
 * 1. new Date()
 * 2. new Date(milliseconds)
 * 3. new Date(dateString)
 * 4. new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
 * The Date constructor in JavaScript is a built-in function that allows you to create and manipulate date and time objects. It can be used in several ways to create a Date object based on different inputs. Here are the various ways to use the Date constructor:

1. new Date()
   - This creates a Date object representing the current date and time.
2. new Date(milliseconds)
   - This creates a Date object based on the number of milliseconds since January 1, 1970, 00:00:00 UTC. For example, new Date(0) would create a Date object representing the epoch time.
3. new Date(dateString)
   - This creates a Date object by parsing a date string. The date string should be in a format recognized by the Date.parse() method. For example, new Date('2024-01-01') would create a Date object representing January 1, 2024.
4. new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
   - This creates a Date object based on the specified date and time components. The monthIndex is zero-based, meaning January is 0, February is 1, and so on. For example, new Date(2024, 0, 1) would create a Date object representing January 1, 2024.
  * The Date constructor provides various methods to manipulate and retrieve information from the Date object, such as getFullYear(), getMonth(), getDate(), getHours(), and many more. It is a powerful tool for working with dates and times in JavaScript.
  * In summary, the Date constructor in JavaScript allows you to create Date objects in multiple ways, providing flexibility in how you can represent and manipulate dates and times in your code. Whether you need to create a Date object for the current date and time, based on a specific timestamp, or by parsing a date string, the Date constructor has you covered.
  * Example:
  * const currentDate = new Date();
  * console.log(currentDate); // Outputs the current date and time
  * const specificDate = new Date('2024-01-01');
  * console.log(specificDate); // Outputs January 1, 2024
  * const dateFromComponents = new Date(2024, 0, 1);
  * console.log(dateFromComponents); // Outputs January 1, 2024
  * const dateFromMilliseconds = new Date(0);
  * console.log(dateFromMilliseconds); // Outputs January 1, 1970
  * In this example, we demonstrate the different ways to create Date objects using the Date constructor, showcasing how it can be used to represent various dates and times based on different inputs.
  *
 */