/*
 * Copyright (c) 2012-2018 Red Hat, Inc.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

import { injectable } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";
import { SshManagerDialog } from "./ssh-manager-dialog";

export const SshCommand = {
    id: 'ssh-manage.openDialog',
    label: "Manage SSH keys..."
};

@injectable()
export class SshFrontendContribution implements CommandContribution, MenuContribution {

    private dialog: SshManagerDialog | undefined;

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(SshCommand, {
            execute: () => this.getOrCreateDialog().open()
        });
    }

    protected getOrCreateDialog(): SshManagerDialog {
        if (this.dialog === undefined) {
            this.dialog = new SshManagerDialog({
                title: 'Manage SSH keys'
            });
        }
        return this.dialog;
    }

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: SshCommand.id,
            label: 'Manage SSH keys...'
        });
    }
}
