> ⚠️ **Security Notice – Temporary Development Dependency Risk**

> ℹ️ **Source Note:** Information regarding recent npm supply chain risks was referenced from this article:  
> https://snyk.io/es/blog/maintainers-of-eslint-prettier-plugin-attacked-via-npm-supply-chain-malware/


This project includes `jest@30.0.4` as a development dependency for testing purposes.  
Due to a recent **npm supply-chain attack**, one of Jest's transitive dependencies, [`napi-postinstall@0.3.2`](https://www.npmjs.com/package/napi-postinstall), has been flagged as malicious, particularly targeting **Windows environments** via DLL injection.

### ✅ What does this mean for you?

- If you're **just visiting or using the deployed site**, you are 100% safe — the production build does **not** include any of the affected code.
- If you're on **macOS or Linux**, and you’re cloning this repo to run locally, you're not at risk (the payload is Windows-specific).
- If you're on **Windows**, and you plan to install dependencies (`npm install`), **you might be affected** if the malicious postinstall script is triggered.

### 🔐 Mitigation steps

If you're running this project on Windows:
```bash
npm install --ignore-scripts
