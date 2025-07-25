import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/ui/main.tsx'],
  bundle: true,
  outfile: 'dist/bundle.js',
  sourcemap: false,
  loader: {
    '.ts': 'ts',
    '.tsx': 'tsx'
  },
  platform: 'browser'
}).catch(() => process.exit(1));
