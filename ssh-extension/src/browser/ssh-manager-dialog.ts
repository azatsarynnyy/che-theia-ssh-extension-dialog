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

import { injectable, inject } from "inversify";
import { AbstractDialog, DialogProps } from "@theia/core/lib/browser";
import { SshKeyService } from './ssh-key-service';

@injectable
export class SshManagerDialog extends AbstractDialog<void> {

    public readonly value: void;

    constructor(@inject(DialogProps) dialogProps: DialogProps, @inject(SshKeyService) sshKeyService: SshKeyService) {
        super(dialogProps);

        const listNode = document.createElement("div");
        listNode.textContent = "SSH keys list";
        this.contentNode.appendChild(listNode);

        listNode.appendChild(this.createNode());
        listNode.appendChild(this.createNode());

        this.appendCloseButton();
    }

    private createNode(): Node {
        const listNode = document.createElement("div");
        listNode.textContent = "ssh key node";
        return listNode;
    }

    private getSshKeys() {
        
    }
}
