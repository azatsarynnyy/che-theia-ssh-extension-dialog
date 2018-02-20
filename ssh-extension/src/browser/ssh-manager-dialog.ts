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

import { AbstractDialog, DialogProps } from "@theia/core/lib/browser";
import { SshKeyWidget } from './ssh-key-widget';
import { SshKeyService } from "../common/ssh-key-service";

export class SshManagerDialog extends AbstractDialog<void> {

    public readonly value: void;

    constructor(dialogProps: DialogProps, sshKeyService: SshKeyService) {
        super(dialogProps);

        const sshKeyWidget = new SshKeyWidget(sshKeyService);
        this.contentNode.appendChild(sshKeyWidget.node);

        this.appendCloseButton("Close");
    }
}
