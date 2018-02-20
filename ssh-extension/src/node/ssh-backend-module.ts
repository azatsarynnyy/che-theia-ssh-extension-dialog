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

import { ContainerModule } from "inversify";
import { JsonRpcConnectionHandler, ConnectionHandler } from "@theia/core/lib/common";
import { SshKeyServiceFakeImpl } from './ssh-key-service-fake-impl';
import { SshKeyService, sshKeyServicePath } from '../common/ssh-key-service';

export default new ContainerModule(bind => {
    bind(SshKeyService).to(SshKeyServiceFakeImpl).inSingletonScope();
    bind(ConnectionHandler).toDynamicValue(ctx =>
        new JsonRpcConnectionHandler(sshKeyServicePath, () =>
            ctx.container.get(SshKeyService)
        )
    ).inSingletonScope();
});
