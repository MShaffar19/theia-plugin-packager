/*********************************************************************
* Copyright (c) 2018-2019 Red Hat, Inc.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/

/**
 * Logger
 * @author Florent Benoit
 */
export class Logger {

    public static DEBUG_ENABLED = false;

    /* tslint:disable:no-console */
    public static debug(...args: any[]): void {
        if (this.DEBUG_ENABLED) {
            console.debug.apply(console, args);
        }
    }

    public static info(...args: any[]): void {
        console.info.apply(console, args);
    }

    public static error(...args: any[]): void {
        console.error.apply(console, args);
    }
}
