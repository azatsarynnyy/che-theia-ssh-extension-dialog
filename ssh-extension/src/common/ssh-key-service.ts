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

export const sshKeyServicePath = '/services/ssh';
export const SshKeyService = Symbol("SshKeyService");

/**
 * The JSON-RPC SSH key service interface.
 */
export interface SshKeyService {

    generate(name: string): Promise<string>;

    get(): Promise<string[]>;

    remove(name: string): Promise<void>;
}
