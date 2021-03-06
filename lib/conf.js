/**
 * Swift-Cardinal Object Notation
 * https://github.com/BlueStone-Tech-Enterprises/scon/
 *
 * Copyright (c) BlueStone Technological Enterprises Inc., 2016-2018
 * Licensed under the GNU GPLv3 license.
 */

"use strict";

const BufferLib = require("arc-bufferlib");

const sconConf = {};

sconConf.magicNumberArr = BufferLib.from([ 7, 83, 67, 50 ]);

let i = 0;
sconConf.endBlock = i++;

sconConf.header = i++; // Unused, reserved for future use
sconConf.compound = i++; // Nested objects
sconConf.referencedCompund = i++; // Unused? I have no idea what I was thinking when I made this
sconConf.referencedKey = i++; // Key-less uses bit 128 to determine string byte length. Note: It's entirely valid to use this to store a referenced utf-8 string less than 65535 bytes long as it takes up 1 less byte to do so
sconConf.referencedValue = i++; // Keyless
sconConf.externalCompund = i++; // Allows for compunds to reference other files (With a file name length between 1 and 255 chars) (Currently unused)
sconConf.externalCompund2 = i++; // Allows for compunds to reference other files (With a file name length between 256 and 65535 chars) (Currently unused)
sconConf.undefined = i++; // Only used in arrays. but this could also be used as a noop.
sconConf.null = i++;

sconConf.boolfalse = i++;
sconConf.booltrue = i++;
sconConf.boolean = i++; // For when you want to waste 7 whole bits on a boolean

// It takes up less space to store inf this way instead of as a float32. 1 byte instead of 5!
sconConf.nan = i++;
sconConf.floatInf = i++;
sconConf.floatNegInf = i++;
sconConf.float32 = i++;
sconConf.float64 = i++;

sconConf.uint0 = i++; // 18
sconConf.uint8 = i++;
sconConf.uint16 = i++;
sconConf.uint24 = i++;
sconConf.uint32 = i++;
sconConf.uint40 = i++;
sconConf.uint48 = i++;
sconConf.uint56 = i++; // Higher than Number.MAX_SAFE_INTEGER, will be inaccurate.
sconConf.uint64 = i++; // 26 - Higher than Number.MAX_SAFE_INTEGER, will be inaccurate.

sconConf.int0 = i++; // 27
sconConf.int8 = i++;
sconConf.int16 = i++;
sconConf.int24 = i++;
sconConf.int32 = i++;
sconConf.int40 = i++;
sconConf.int48 = i++;
sconConf.int56 = i++; // Higher than Number.MAX_SAFE_INTEGER, will be inaccurate.
sconConf.int64 = i++; // 35 - Higher than Number.MAX_SAFE_INTEGER, will be inaccurate.


// Unicode string
sconConf.utf8string0 = i++; // 36
sconConf.utf8string8 = i++;
sconConf.utf8string16 = i++;
sconConf.utf8string24 = i++;
sconConf.utf8string32 = i++; // Maximum length in nodejs. All utf8string sizes above this are placeholders
sconConf.utf8string40 = i++;
sconConf.utf8string48 = i++;
sconConf.utf8string56 = i++;
sconConf.utf8string64 = i++; // 44

sconConf.array0 = i++; // 45
sconConf.array8 = i++;
sconConf.array16 = i++;
sconConf.array24 = i++;
sconConf.array32 = i++; // Maximum length in nodejs. All array sizes above this are placeholders
sconConf.array40 = i++;
sconConf.array48 = i++;
sconConf.array56 = i++;
sconConf.array64 = i++; // 53

// byte array
sconConf.string0 = i++; // 54
sconConf.string8 = i++;
sconConf.string16 = i++;
sconConf.string24 = i++;
sconConf.string32 = i++; // Maximum length in nodejs. All string sizes above this are placeholders
sconConf.string40 = i++;
sconConf.string48 = i++;
sconConf.string56 = i++;
sconConf.string64 = i++; // 62

sconConf.valuePointer0 = i++; // This always points to the "root" object;
sconConf.valuePointer8 = i++;
sconConf.valuePointer16 = i++;
sconConf.valuePointer24 = i++;
sconConf.valuePointer32 = i++; // 67

/*
 * sconConf.utf16string8 = 27;
 * sconConf.utf16string16 = 28;
 * sconConf.utf16string24 = 29;
 * sconConf.utf16string32 = 30;
 * sconConf.utf16string40 = 31;
 * sconConf.utf16string48 = 32;
 * sconConf.utf16string56 = 33;
 * sconConf.utf16string64 = 34;
 */

sconConf.reserved = 127;

module.exports = sconConf;
