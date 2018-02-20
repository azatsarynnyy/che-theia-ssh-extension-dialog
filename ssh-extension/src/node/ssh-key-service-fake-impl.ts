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
import { SshKeyService } from '../common/ssh-key-service';

@injectable()
export class SshKeyServiceFakeImpl implements SshKeyService {

    generate(name: string): Promise<string> {
        return Promise.resolve(name);
    }

    get(): Promise<string[]> {
        return Promise.resolve(["SSH key 1", "SSH key 2", "SSH key 3", "SSH key 4", "SSH key 5", "SSH key 6"]);
    }

    remove(name: string): Promise<void> {
        return Promise.resolve();
    }
}
