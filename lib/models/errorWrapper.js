/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ErrorWrapper class.
 * @constructor
 * Wrapper object
 *
 * @member {array} [errors] An array of inner errors.
 *
 */
class ErrorWrapper extends models['ErrorResponse'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ErrorWrapper
   *
   * @returns {object} metadata of ErrorWrapper
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorWrapper',
      type: {
        name: 'Composite',
        className: 'ErrorWrapper',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          params: {
            required: false,
            serializedName: 'params',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          path: {
            required: false,
            serializedName: 'path',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          errors: {
            required: false,
            serializedName: 'errors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorResponseElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorResponse'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorWrapper;
