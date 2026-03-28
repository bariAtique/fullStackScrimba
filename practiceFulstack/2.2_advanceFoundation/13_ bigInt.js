/**
 * bigInt is a built-in JavaScript object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number that can be safely represented with the Number type.
 * BigInt can be created by appending 'n' to the end of an integer literal or by using the BigInt() constructor. For example:
 * const bigInt1 = 123456789012345678901234567890n;
 * const bigInt2 = BigInt(123456789012345678901234567890);
  * BigInt supports various arithmetic operations such as addition, subtraction, multiplication, division, and exponentiation. However, it does not support floating-point numbers or the Math object methods that operate on numbers.
  * BigInt can be useful in scenarios where you need to work with very large integers, such as in cryptography, scientific calculations, or when dealing with large datasets. It provides a way to handle numbers that exceed the limitations of the Number type without losing precision.
  * In summary, BigInt is a powerful tool in JavaScript for working with large integers that cannot be safely represented with the Number type. It allows you to perform arithmetic operations on large integers without losing precision, making it an essential feature for certain applications that require handling of large numbers.
 * Example:
 * const bigInt1 = 123456789012345678901234567890n;
 * const bigInt2 = BigInt(123456789012345678901234567890);
 * const sum = bigInt1 + bigInt2;
 * console.log(sum); // Outputs 246913578024691357802469135780n
 * In this example, we create two BigInt values and perform an addition operation on them. The result is a new BigInt that represents the sum of the two large integers, demonstrating how BigInt can handle numbers that exceed the limitations of the Number type without losing precision.
 * 
 * 
 */