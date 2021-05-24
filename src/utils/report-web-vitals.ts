import { Metric, getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';

getCLS((metric: Metric): void => {
  console.log('Unknown web-vitals metric (CLS)', metric);
});

getFCP(({ value }: Metric): void => {
  console.log(`Performance paint timing: ${value}`);
});

getFID(({ value }: Metric): void => {
  console.log(`Performance event timing: ${value}`);
});

getLCP(({ value }: Metric): void => {
  console.log(`Largest contentful paint: ${value}`);
});

getTTFB(({ value }: Metric): void => {
  console.log(`Performance navigation timing: ${value}`);
});
