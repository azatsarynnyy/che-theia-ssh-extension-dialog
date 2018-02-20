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

import { h, VirtualNode } from '@phosphor/virtualdom';
import { VirtualWidget, VirtualRenderer } from '@theia/core/lib/browser';
import { SshKeyService } from '../common/ssh-key-service';

export class SshKeyWidget extends VirtualWidget {

    protected sshKeys: string[] = [];

    constructor(protected sshKeyService: SshKeyService) {
        super();
        this.fetchKeys().then(() => this.update());
    }

    protected async fetchKeys() {
        return this.sshKeyService.get().then(keys => this.sshKeys = keys);
    }

    protected render(): h.Child {
        return this.renderKeyList();
    }

    protected renderKeyList(): VirtualNode {
        const theList: h.Child[] = [];
        this.sshKeys.forEach(key => {
            const container = this.renderKey(key);
            theList.push(container);
        });

        return h.div({
            id: 'keyListContainer'
        },
            VirtualRenderer.flatten(theList));
    }

    protected renderKey(key: string): VirtualNode {
        return h.div(key);
    }
}
