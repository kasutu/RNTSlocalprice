import 'react-native-get-random-values';
import * as Uuid from 'uuid';

// export uuid instance
/**
 
 * @variation uuid.NIL The nil UUID string (all zeros)
 * @variation uuid.parse() Convert UUID string to array of bytes
 * @variation uuid.stringify() Convert array of bytes to UUID string
 * @variation uuid.v1() Create a version 1 (timestamp) UUID
 * @variation uuid.v3() Create a version 3 (namespace w/ MD5) UUID
 * @variation uuid.v4() Create a version 4 (random) UUID
 * @variation uuid.v5() Create a version 5 (namespace w/ SHA-1) UUID
 * @variation uuid.validate() Test a string to see if it is a valid UUID
 * @variation uuid.version() Detect RFC version of a UUID
 */
export const uuid = Uuid;
