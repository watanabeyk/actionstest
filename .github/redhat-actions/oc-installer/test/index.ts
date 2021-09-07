/* -----------------------------------------------------------------------------------------------
 *  Copyright (c) Red Hat, Inc. All rights reserved.
 *  Licensed under the MIT License. See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------------*/

const mode: string = process.env.VSCA_TEST_MODE || 'coverage';

// eslint-disable-next-line no-undef
module.exports = require(`./index.${mode}`);
